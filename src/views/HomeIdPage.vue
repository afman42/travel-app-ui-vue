<script setup>
import colors from '../assets/colors/colors';
import { useRoute, useRouter } from 'vue-router';
import discoverData from '../assets/data/discoverData';
import IconHeart from '~icons/ant-design/heart-filled'
import PngChevronLeft from '../assets/images/chevron-left.png'
import PngPin from '../assets/images/pin-icon.png'
const route = useRoute();
const router = useRouter();
const data = discoverData.find((x) => x.id === route.params.id);
</script>

<template>
    <div class="sm:min-h-full">
        <div class="sm:bg-no-repeat sm:bg-cover sm:flex sm:flex-col" :style="{
            backgroundImage: `url(${data.imageBig})`,
            height: '410px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            zIndex: '-1',
        }">
            <img @click="router.back()" :src="PngChevronLeft" class="sm:ml-3 mt-5" :style="{ width: '20px', height:'20px'}" />
            <div class="sm:flex sm:flex-col px-3 pb-5 mb-[40px]" :style="{
                marginTop: '190px'
            }">
                <h1 class="sm:text-white" :style="{
                    fontSize: '32px',
                }">{{ data.title }}</h1>
                <div class="sm:flex sm:flex-row" :style="{
                }">
                    <img :src="PngPin" />
                    <h5 class="sm:text-white" :style="{
                        fontSize: '16px',
                    }">{{ data.location }}</h5>
                </div>
            </div>
        </div>
        <div class="sm:rounded-tl-[20px] sm:rounded-tr-[20px] sm:bg-white sm:flex sm:justify-between px-[20px]" :style="{
            marginTop: '360px',
        }">
            <div class="sm:pt-[30px] sm:w-full">
                <h1 style="font-size: 24px;">Description</h1>
                <p class="sm:mt-2" :style="{ color: '#C4C4C4'}">{{ data.description }}</p>
                <div class="sm:flex sm:justify-between sm:mt-3">
                    <div class="sm:flex sm:flex-col">
                        <h6 style="font-size: 12px;" class="text-[#D1D3D2]">PRICE</h6>
                        <div class="sm:flex sm:flex-row sm:items-center">
                            <h1 class="font-bold text-[#F35D38]" style="font-size:24px;">${{ data.price }}</h1>
                            <h6 class="text-[#D1D3D2]">/person</h6> 
                        </div> 
                    </div>
                    <div class="sm:flex sm:flex-col">
                        <h6 style="font-size: 12px;" class="text-[#D1D3D2]">RATING</h6>
                        <div class="sm:flex sm:flex-row sm:items-center">
                            <h1 class="font-bold text-[#F35D38]" style="font-size:24px;">{{ data.rating }}</h1>
                            <h6 class="text-[#D1D3D2]">/5</h6> 
                        </div> 
                    </div>
                    <div class="sm:flex sm:flex-col">
                        <h6 style="font-size: 12px;" class="text-[#D1D3D2]">DURATION</h6>
                        <div class="sm:flex sm:flex-row sm:items-center">
                            <h1 class="font-bold text-[#F35D38]" style="font-size:24px;">{{ data.duration }}</h1>&nbsp;
                            <h6 class="text-[#D1D3D2]">hours</h6> 
                        </div> 
                    </div>
                </div> 
                <div class="sm:my-4 sm:w-full sm:flex">
                    <button class="sm:rounded-xl text-white bg-[#F35D38] sm:px-[118px] py-[20px]">Book Now</button>
                </div>
            </div>
            <div :style="{ position: 'absolute', top: 'auto', right: '0px'}" class="sm:rounded-full sm:bg-white sm:-mt-[30px] px-5 py-5 sm:mr-[20px] sm:shadow-lg">
                <IconHeart :style="{
                    color: colors.orange,
                    fontSize: '32px'
                }" />
            </div>
        </div>
    </div>
</template>