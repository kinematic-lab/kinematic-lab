<template>
	<main>
		<NuxtPage />
	</main>
</template>

<style lang="postcss">
body {
	font-family: 'PP Air';
	overscroll-behavior: none;

	& pre {
		font-family: 'PP Air Mono';
		line-height: 1.25;
		margin: 0;
	}

	& h1,
	& h2,
	& h3,
	& h4,
	& h5,
	& h6 {
		font-weight: 400;
	}

	& main {
		padding: 32px 64px;
	}

	& a {
		display: block;
	}
}
</style>
