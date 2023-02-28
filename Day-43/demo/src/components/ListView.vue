<template>
    <div>
        <br/>
            <br/>
        <center>
        <div class="main-container">
            <div v-for="content in mainContents" :key="content.id">
                <div id="main-content">
                    <div class="image-container">
                        <img v-bind:src="content.img" alt="image" class="image">
                    </div>
                    <div class="text-content">
                        {{ content.message }}
                    </div>
                </div>
            </div>

        </div>
    </center>
    <br/>
            <br/>
    </div>
</template>

<script>
export default {
    name: "ListView",
    data() {
        return {
            mainContents: [
                {
                    id: 1,
                    img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2022/challenger/gallery/exterior/2022-dodge-challenger-gallery-exterior-16.jpg.image.1440.jpg",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor corporis accusantium harum laudantium sit alias. Reiciendis enim earum nulla accusamus maxime atque maiores, soluta cum eius nisi officia molestias."
                },
                {
                    id: 2,
                    img: "https://www.autoscout24.it/cms-content-assets/3T3rdXHAVyYu2dLIVY5qbx-3069787c2fbc7dc1ae58c32a9945c723-dodge-challenger-l-01-1100.jpg",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor corporis accusantium harum laudantium sit alias. Reiciendis enim earum nulla accusamus maxime atque maiores, soluta cum eius nisi officia molestias."
                },
                {
                    id: 3,
                    img: "https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2022/challenger/gallery/exterior/2022-dodge-challenger-gallery-exterior-5.jpg.image.1440.jpg",
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor corporis accusantium harum laudantium sit alias. Reiciendis enim earum nulla accusamus maxime atque maiores, soluta cum eius nisi officia molestias."
                },
                {
                    id: 4,
                    img:'https://www.dodge.com/content/dam/fca-brands/na/dodge/en_us/2022/challenger/gallery/exterior/2022-dodge-challenger-gallery-exterior-1.jpg',
                    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dolor corporis accusantium harum laudantium sit alias. Reiciendis enim earum nulla accusamus maxime atque maiores, soluta cum eius nisi officia molestias."
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
    justify-content: center;
}

.main-heading {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
}

#main-content {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(173, 173, 173);
    border-radius: 7px;
    padding: 0.5rem;
    margin-bottom: 1rem;
}

.image-container {
    width: 90%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    border-radius: 7px;
}

.message-content {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
}
</style>