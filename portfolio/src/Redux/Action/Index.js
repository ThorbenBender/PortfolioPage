export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const showModal = modal => {
  return { type: SHOW_MODAL, payload: modal };
};

export const closeModal = modal => {
  return { type: CLOSE_MODAL, payload: modal };
};
