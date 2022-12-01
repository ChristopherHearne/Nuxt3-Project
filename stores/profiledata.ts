import { defineStore } from 'pinia'

export interface IProfileData{
	user: {}
}

export const useProfileData = defineStore('profiledata', {
	state: (): IProfileData  => ({
		user: {}
	}),
	actions: {
		updateUserData(data: Object){
			this.user = data
		},
		getUserData(){
			return this.user
		},
	}
}) 
