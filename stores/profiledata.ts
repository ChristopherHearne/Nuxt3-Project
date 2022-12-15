import { defineStore } from 'pinia'

export interface IProfileData{
	user:{
		firstName: string, 
		lastName: string,
		title: string,
		email: string, 
		about: string, 
		interests: string, 
		facebook: string, 
		linkedin: string, 
		instagram: string, 
		website: string,
		profileName: string, 
	}
}

export const useProfileData = defineStore('profiledata', {
	state: (): IProfileData  => ({
		user:{
			firstName: null,
			lastName: null,
			title: null,
			email: null,
			about: null,
			interests: null,
			facebook: null,
			linkedin: null,
			instagram: null,
			website: null,
			profileName: null,
		}
	}),
	actions: {
		getUserData(){
			return this.user
		},
	}
}) 
