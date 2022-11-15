<template>
	<div>
		<slot name="header">
			<NavBarSigned/>
		</slot>
		<slot />
		<slot name="footer">
			<FooterLayout/> 
		</slot>
	</div>
</template>