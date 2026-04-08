<script setup lang="ts">
import { onMounted, ref } from 'vue';

const boards = ref<Board[]>([]);

interface Board {
    id: number;
    name: string;
}

function loadBoards() {
    fetch(`https://adaboards-api.vercel.app/api/boards`, {
        method: 'GET',
        headers: {
            "X-No-Auth": "true"
        }
    })
        .then(response => response.json())
        .then(data => {
            boards.value = data;
            console.log(boards)
        })
        .catch(error => {
            console.log(error);
        });
}

onMounted(() => {
    loadBoards();
})
</script>
<template>
    <div class="flex flex-col">
        <div class="flex justify-between">
            <div class="flex items-center gap-1">
                <svg class="w-[1em] h-[1em]" width="35" height="31" viewBox="0 0 35 31" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 4.42857C0 1.98594 1.96191 0 4.375 0H30.625C33.0381 0 35 1.98594 35 4.42857V26.5714C35 29.0141 33.0381 31 30.625 31H4.375C1.96191 31 0 29.0141 0 26.5714V4.42857ZM4.375 8.85714V26.5714H15.3125V8.85714H4.375ZM30.625 8.85714H19.6875V26.5714H30.625V8.85714Z"
                        fill="white" />
                </svg>
                <p class="font-title font-bold text-light">AdaBoards</p>
            </div>
            <button class="text-gray-800 font-title font-bold! bg-primary rounded-md px-3 py-1">Log out</button>
        </div>
    </div>
    <div class="flex flex-col gap-8 mt-8 mx-8">
        <div class="flex justify-between">
            <p class="font-fancy text-light text-3xl">
                Hello, <span class="text-primary">Ada Lovelace</span>
            </p>
            <button class="text-gray-800 font-title font-bold! bg-primary rounded-md px-3 py-1">Add board</button>
        </div>
        <div class="grid grid-cols-3 gap-8">
            <div v-for="board in boards" :key="board.id" class="flex flex-col gap-2 border-2 border-light rounded-md p-4 text-sm">
                <div class="flex justify-between">
                    <p class="font-title font-bold text-light text-2xl">{{ board.name }}</p>
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.24286 0.967969C7.53214 0.371875 8.12679 0 8.775 0H15.225C15.8732 0 16.4679 0.371875 16.7571 0.967969L17.1429 1.75H22.2857C23.2339 1.75 24 2.53203 24 3.5C24 4.46797 23.2339 5.25 22.2857 5.25H1.71429C0.766071 5.25 0 4.46797 0 3.5C0 2.53203 0.766071 1.75 1.71429 1.75H6.85714L7.24286 0.967969ZM1.71429 7H22.2857V24.5C22.2857 26.4305 20.7482 28 18.8571 28H5.14286C3.25179 28 1.71429 26.4305 1.71429 24.5V7ZM6.85714 10.5C6.38571 10.5 6 10.8938 6 11.375V23.625C6 24.1063 6.38571 24.5 6.85714 24.5C7.32857 24.5 7.71429 24.1063 7.71429 23.625V11.375C7.71429 10.8938 7.32857 10.5 6.85714 10.5ZM12 10.5C11.5286 10.5 11.1429 10.8938 11.1429 11.375V23.625C11.1429 24.1063 11.5286 24.5 12 24.5C12.4714 24.5 12.8571 24.1063 12.8571 23.625V11.375C12.8571 10.8938 12.4714 10.5 12 10.5ZM17.1429 10.5C16.6714 10.5 16.2857 10.8938 16.2857 11.375V23.625C16.2857 24.1063 16.6714 24.5 17.1429 24.5C17.6143 24.5 18 24.1063 18 23.625V11.375C18 10.8938 17.6143 10.5 17.1429 10.5Z"
                            fill="white" />
                    </svg>
                </div>
                <p class="font-body font-normal text-light">Updated at date</p>
                <div class="bg-light border-2 border-light font-body font-normal text-gray-800 rounded w-fit px-1 py-0.2">
                    <p>Ada Lovelace</p>
                </div>
            </div>
        </div>
    </div>
</template>