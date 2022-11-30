import { defineStore } from 'pinia'

export interface INavigatorState{
	navigation: Navstates
}

enum Navstates {
	BasicInfo, 
	Bio, 
	SocialLinks, 
	ProfileName
}

const navstateRange = Object.keys(Navstates).length / 2

export const useNavigator = defineStore('navigator', {
	state: (): INavigatorState => ({
		navigation: Navstates.BasicInfo
	}),
	actions: {
		nextNavstate(){
			if (navstateRange === this.navigation){
				this.resetNavstate()
			}
			else{
				this.navigation++
			}
		},
		previousNavstate(){
			if (navstateRange === this.navigation){
				this.resetNavstate()
			}
			else{
				this.navigation--
			}
		},
		resetNavstate(){
			this.navigation = Navstates.BasicInfo
		},
	}
}) 
