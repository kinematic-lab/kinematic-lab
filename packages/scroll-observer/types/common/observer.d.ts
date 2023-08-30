interface LabScrollObserverOptions extends IntersectionObserverInit {
	autoOptimize?: boolean;
}

interface LabScrollObserver {
	observe: (target: HTMLElement) => void;
	unobserve: (target: HTMLElement) => void;
	trigger: (event: Event) => void;
	disconnect: () => void;
}
