<script setup>
import IconMenu from '~icons/gg/menu-left-alt'
import PngPerson from '../assets/images/person.png'
import PngPin from '../assets/images/pin-icon.png'
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import discoverData from '../assets/data/discoverData';
import activitiesData from '../assets/data/activitiesData';
import learnMoreData from '../assets/data/learnMoreData';
import colors from '../assets/colors/colors';
import { useRouter } from 'vue-router';
const router = useRouter();
function clickId(id){
    router.push(`/${id}`);
}
</script>

<template>
    <div class="sm:min-h-full sm:w-full">
        <div class="sm:mt-6 sm:mx-5 flex sm:justify-between">
            <IconMenu style="font-size: 40px;" />
            <img :src="PngPerson" class="sm:rounded-lg" />
        </div>
        <div class="sm:mt-6">
            <span class="ml-5" style="font-size: 32px;">Discover</span>
            <div class="sm:flex sm:px-1 sm:py-1 sm:justify-between wrapperXScroll">
                <div 
                    class="mx-5" 
                    v-for="item in discoverCategoriesData" 
                    :key="item.id" 
                    :style="{ color: item.selected ? colors.orange : '#CFCFD1',}"
                >{{ item.text }}</div>
            </div>
            <div class="sm:flex sm:flex-row sm:bg-no-repeat sm:bg-cover sm:ml-4 sm:mt-2 wrapperXScroll">
                <div @click="clickId(item.id)" class="sm:ml-5 sm:flex sm:items-end" v-for="item in discoverData" :style="{
                    backgroundImage: `url(${item.image})`,
                    width: '170px',
                    height: '250px',
                    borderRadius: '20px',
                }">
                    <div class="sm:flex sm:flex-col px-2 pb-2">
                        <div class="sm:font-semibold" :style="{ fontSize: '18px',color: colors.white}">{{ item.title}}</div>
                        <div class="sm:flex sm:flex-row sm:items-center" :style="{ fontSize: '10px', color: colors.white}"><img :src="PngPin" /> {{ item.location}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="sm:mt-3 sm:ml-5">
            <h1 class="font-bold" :style="{ fontSize: '24px'}">Activities</h1>
            <div class="sm:flex sm:flex-row wrapperXScroll sm:mt-3">
                <div class="sm:ml-3 sm:justify-center sm:w-full" v-for="item in activitiesData" >
                    <img :style="{ width: '30px', height: '30px'}" :src="item.image" />
                    <span :style="{ fontSize: '10px', color: '#D1D3D2'}">{{ item.title}}</span>
                </div>
            </div>
        </div>
        <div class="sm:mt-2">
            <h1 class="sm:font-bold sm:ml-6" :style="{ fontSize: '24px'}">Learn More</h1>
            <div class="sm:flex sm:flex-row wrapperXScroll">
                <div class="sm:ml-5 sm:flex sm:items-end" v-for="item in learnMoreData" :key="item.id" :style="{
                    backgroundImage: `url(${item.image})`,
                    width: '180px',
                    height: '180px',
                    borderRadius:'10px'
                }">
                    <div :style="{ color: colors.white, fontSize:'16px'}">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>