<template>
	<div>
		<slot name="header">
			<NavBar/>
		</slot>
		<slot />
		<slot name="footer">
			<FooterLayout/> 
		</slot>
	</div>
</template>