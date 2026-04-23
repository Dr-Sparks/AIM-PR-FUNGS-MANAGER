import test from "node:test";
import assert from "node:assert/strict";
import {
  COURSE_SLOT_COUNT,
  autoSelectQuestions,
  buildExportPayload,
  normalizeSlots,
  validateAssignment,
} from "./AIMExamManager.helpers.js";

test("normalizeSlots always returns exactly four slots", () => {
  assert.equal(normalizeSlots(["A", "B"]).length, COURSE_SLOT_COUNT);
  assert.deepEqual(normalizeSlots(["A", "B"]), ["A", "B", "", ""]);
});

test("validateAssignment accepts only four-slot assignments", () => {
  assert.equal(validateAssignment({ courseIds: ["A", "B", "C", "D"] }), true);
  assert.equal(validateAssignment({ courseIds: ["A", "B"] }), false);
});

test("autoSelectQuestions filters and sorts by selected modules", () => {
  const selected = autoSelectQuestions(
    [
      { id: "q2", moduleId: "B", stem: "Zulu" },
      { id: "q1", moduleId: "A", stem: "Beta" },
      { id: "q3", moduleId: "A", stem: "Alpha" },
    ],
    ["A"]
  );

  assert.deepEqual(
    selected.map((question) => question.id),
    ["q3", "q1"]
  );
});

test("buildExportPayload preserves metadata and question ordering", () => {
  const payload = buildExportPayload({
    weiterbildungsgang: {
      id: "w1",
      code: "BE-24",
      name: "Bern",
      location: "Bern",
      cohortLabel: "2024",
      status: "active",
      startSemesterId: "hs24",
    },
    selectedAssignments: [
      { semesterId: "hs24", courseIds: ["A", "B", "C", "D"] },
      { semesterId: "fs25", courseIds: ["E", "F", "", ""] },
    ],
    selectedModuleIds: ["A", "B"],
    questions: [
      {
        id: "q1",
        moduleId: "A",
        stem: "Frage A",
        options: ["1", "2", "3", "4"],
        correctOptionIndexes: [1],
        answerFormat: "Single Choice",
        createdYear: "2026",
        location: "Bern",
        lecturer: "Dozent A",
        difficulty: "mittel",
        tags: ["a"],
      },
    ],
    examMeta: {
      examTitle: "AIM Test",
      examDate: "2026-04-23",
      durationMinutes: "90",
      examCode: "A-1",
      notes: "Hinweis",
    },
  });

  assert.equal(payload.examMeta.language, "de-CH");
  assert.equal(payload.questions[0].order, 1);
  assert.equal(payload.questions[0].correctOptionLetters[0], "B");
  assert.deepEqual(payload.semesterSnapshot[1].courseIds, ["E", "F"]);
});
