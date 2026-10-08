export const BEAR_SEQUENCE_DURATION = 20000;

function smooth(value: number) {
  const bounded = Math.min(1, Math.max(0, value));
  return bounded * bounded * (3 - 2 * bounded);
}

export function bearSequenceFrame(value: number) {
  const progress = Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
  const firstPrompt = "Draw a bear.";
  const editPrompt = "Lift its front paw.";
  const typing = progress < 9 || (progress >= 74 && progress < 83);
  const typingPrompt = progress < 74 ? firstPrompt : editPrompt;
  const typedAmount = progress < 9 ? progress / 9 : (progress - 74) / 9;
  const sending = (progress >= 9 && progress < 10) || (progress >= 83 && progress < 84);
  return {
    progress,
    typing,
    sending,
    promptText: typing ? typingPrompt.slice(0, Math.ceil(typedAmount * typingPrompt.length))
      : sending ? typingPrompt : "",
    message: progress >= 84 ? editPrompt : progress >= 10 ? firstPrompt : "",
    sketchProgress: Math.min(1, Math.max(0, (progress - 12) / 28)),
    paintOpacity: Math.min(1, Math.max(0, (progress - 42) / 30)),
    editOpacity: smooth((progress - 86) / 12),
    stage: progress < 42 ? "Sketch" : progress < 86 ? "Paint" : "Edit paw",
  };
}
