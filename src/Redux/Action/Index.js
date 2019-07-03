export const SHOW_MODAL = "SHOW_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const OPEN_FOLDER = "OPEN_FOLDER";
export const CLOSE_FOLDER = "CLOSE_FOLDER";
export const HIDE_APPLICATION = "HIDE_APPLICATION";
export const SHOW_APPLICATION = "SHOW_APPLICATION";

export const showModal = modal => {
  console.log("Hello");
  return { type: SHOW_MODAL, payload: modal };
};

export const closeModal = modal => {
  console.log("delete");
  return { type: CLOSE_MODAL, payload: modal };
};

export const openFolder = project => {
  return { type: OPEN_FOLDER, payload: project };
};

export const closeFolder = () => {
  return { type: CLOSE_FOLDER };
};

export const showApplication = Application => {
  // console.log("hello");
  return { type: SHOW_APPLICATION, payload: Application };
};

export const hideApplication = Application => {
  return { type: HIDE_APPLICATION, payload: Application };
};
