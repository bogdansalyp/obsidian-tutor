import { ItemView, WorkspaceLeaf } from "obsidian";

export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  questions: string[];

  constructor(leaf: WorkspaceLeaf, questions: string[]) {
    super(leaf);
    this.questions = questions;
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {
    const container = this.containerEl.children[1];
    container.empty();
    container.createEl("h4", { text: "Questions" });
    this.questions.forEach(q => container.createEl("p", { text: q }));
  }

  async onClose() {
    // Nothing to clean up.
  }
}