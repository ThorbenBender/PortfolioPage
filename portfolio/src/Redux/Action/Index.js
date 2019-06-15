export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const showModal = modal => {
  console.log("Hello");
  return { type: SHOW_MODAL, payload: modal };
};

export const closeModal = modal => {
  console.log("delete");
  return { type: CLOSE_MODAL, payload: modal };
};
