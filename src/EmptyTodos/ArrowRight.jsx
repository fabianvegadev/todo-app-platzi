// eslint-disable-next-line react/prop-types
const ArrowRight = ({ size, ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		viewBox="0 0 24 24"
		fill="none"
		{...props}
	>
		<style>{"@keyframes slide6{to{transform:translateX(2px)}}"}</style>
		<path
			fill="#0A0A30"
			fillRule="evenodd"
			d="M13.155 16.834a.714.714 0 0 0 1.006-.091l3.564-4.277a.711.711 0 0 0 0-.932L14.16 7.257a.714.714 0 0 0-1.097.915l2.565 3.078H7.9a.75.75 0 0 0 0 1.5h7.73l-2.565 3.078a.714.714 0 0 0 .091 1.006z"
			clipRule="evenodd"
			style={{
				animation:
					"slide6 1s infinite alternate both cubic-bezier(1,-.01,0,.98)",
			}}
		/>
	</svg>
);
export { ArrowRight };
