<template>
	<div>
		<slot name="header">
			<NavBarLanding/>
		</slot>
		<slot />
		<!-- <slot name="footer">
			<FooterLayout/> 
		</slot> -->
	</div>
</template>