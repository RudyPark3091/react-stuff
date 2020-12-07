/* eslint no-restricted-globals: ["off"] */

export const useConfirm = (message, onConfirm, onCancel) => {
	if (!onConfirm || typeof onConfirm !== "function") {
		return;
	}

	if (!onCancel || typeof onCancel !== "function") {
		return;
	}

	const confirmAction = () => {
		if (confirm(message)) {
			onConfirm();
		} else {
			onCancel();
		}
	}
	return confirmAction;
}
