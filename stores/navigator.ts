import { defineStore } from 'pinia'

export interface INavigatorState{
	currentNavstate: Navstates
}

enum Navstates {
	BasicInfo, 
	Bio, 
	SocialLinks, 
	ProfileName, 
	Completed
}

const navstateRange = Object.keys(Navstates).length / 2 - 1

export const useNavigator = defineStore('navigator', {
	state: (): INavigatorState => ({
		currentNavstate: Navstates.BasicInfo
	}),
	actions: {
		nextNavstate(){
			if (navstateRange === this.currentNavstate){
				this.resetNavstate()
			}
			else{
				this.currentNavstate++
			}
		},
		previousNavstate(){
			if (navstateRange === this.currentNavstate || this.currentNavstate === 0){
				this.resetNavstate()
			}
			else{
				this.currentNavstate--
			}
		},
		resetNavstate(){
			this.currentNavstate = Navstates.BasicInfo
		},
	}
}) 
