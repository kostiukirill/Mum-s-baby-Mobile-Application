import DiaryChildsEat from "../components/Home/Diary-childs-eat/DiaryChildsEat";
import DiaryGrowth from "../components/Home/Diary-growth/DiaryGrowth";
import DiaryMumsEat from "../components/Home/Diary-mums-eat/DairyMumsEat";
import DiarySleep from "../components/Home/Diary-sleep/DiarySleep";
import DiaryTakingMedications from "../components/Home/Diary-taking-medications/DiaryTakingMedications";
import Doctors from "../components/Home/Doctors/Doctors";
import Vaccinations from "../components/Home/Vaccinations/Vaccinations";

export const screens = [
    {
        name: 'Sleep',
        component: DiarySleep
    },
    {
        name: 'ChildEat',
        component: DiaryChildsEat
    },
    {
        name: 'MumEat',
        component: DiaryMumsEat
    },
    {
        name: 'Growth',
        component: DiaryGrowth
    },
    {
        name: 'Vaccinations',
        component: Vaccinations
    },
    {
        name: 'Doctors',
        component: Doctors
    },
    {
        name: 'MumsPill',
        component: DiaryTakingMedications
    },
    {
        name: 'ChildPill',
        component: DiaryTakingMedications
    },
]