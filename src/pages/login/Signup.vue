<script setup lang="ts">
</script>

<template>
    <div class="flex">
        <div class="flex items-center gap-1">
            <svg class="w-[1em] h-[1em]" width="35" height="31" viewBox="0 0 35 31" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 4.42857C0 1.98594 1.96191 0 4.375 0H30.625C33.0381 0 35 1.98594 35 4.42857V26.5714C35 29.0141 33.0381 31 30.625 31H4.375C1.96191 31 0 29.0141 0 26.5714V4.42857ZM4.375 8.85714V26.5714H15.3125V8.85714H4.375ZM30.625 8.85714H19.6875V26.5714H30.625V8.85714Z"
                    fill="white" />
            </svg>
            <p class="font-title font-bold text-light">AdaBoards</p>
        </div>
    </div>
    <div>
        <div class="flex flex-col items-center gap-2">
            <p class="font-title text-light text-4xl">
                Create an account
            </p>
            <p class="font-body font-normal text-light">Start organizing your projects today</p>
        </div>
        <div class="flex flex-col items-center gap-2 text-light mt-4">
            <div>
                <p>Fullname</p>
                <input placeholder="Ada Lovelace" class="border border-light rounded-md"/>
            </div>
            <div>
                <p>Email</p>
                <input placeholder="ada@adatechschool.fr" class="border border-light rounded-md"/>
            </div>
            <div>
                <p>Password</p>
                <input class="border border-light rounded-md"/>
            </div>
            <button class="border border-light bg-light rounded-md text-gray-800 font-bold!">
                Create my account
            </button>
            <p>Already have an account? Sign in</p>
        </div>
    </div>
</template>