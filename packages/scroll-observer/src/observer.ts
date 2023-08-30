const observers: LabScrollObserver[] = [];
const trigger = (event: Event) => observers.forEach((o) => o.trigger(event));
const attachListeners = () => window.addEventListener('scroll', trigger);
const detachListeners = () => window.removeEventListener('scroll', trigger);

export default function (options: LabScrollObserverOptions): LabScrollObserver {
	const observer = new IntersectionObserver(() => {}, options);

	const response = {
		observe(target: HTMLElement) {},
		unobserve(target: HTMLElement) {},
		trigger(event: Event) {},
		disconnect() {},
	};

	observers.push(response);
	return response;
}
