<template>
    <div>
        <br/>
            <br/>
        <div class="main-container">
            <div class="main-content">
                <div class="main-content-item" v-for="item in mainContents" :key="item.id">
                    <img :src="item.img" alt="car" class="image">
                </div>
            </div>
        </div>   
        <br/>
            <br/>         
    </div>
</template>

<script>

    export default {
        name: "GridView",

        data() {
            return {
                mainContents: [
                    {
                        id: 1,
                        img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2022/challenger/gallery/exterior/2022-dodge-challenger-gallery-exterior-16.jpg.image.1440.jpg",
                    },
                    {
                        id: 2,
                        img: "https://www.autoscout24.it/cms-content-assets/3T3rdXHAVyYu2dLIVY5qbx-3069787c2fbc7dc1ae58c32a9945c723-dodge-challenger-l-01-1100.jpg",
                    },
                    {
                        id: 3,
                        img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2022/challenger/gallery/exterior/2022-dodge-challenger-gallery-exterior-5.jpg.image.1440.jpg",
                    },
                    {
                        id: 4,
                        img:'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2022/challenger/gallery/exterior/2022-dodge-challenger-gallery-exterior-1.jpg',
                    },
                    {
                        id: 5,
                        img: "https://cars.usnews.com/images/article/202204/129074/DG020_102CLd7csbcug2dbj5a2fohs7kmqvp5.jpg",
                    },
                    {
                        id:6,
                        img:"https://i.pinimg.com/736x/52/67/6c/52676cc141cade81b300a694834d3b75.jpg"
                    }
                ]
            }
        }
    }
</script>

<style>
    .main-container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .main-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .main-content-item {
        width: 300px;
        height: 300px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-content-item-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>