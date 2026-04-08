<script setup lang="ts">
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <div class="flex justify-between">
            <div class="flex items-center gap-1">
                <svg class="w-[1em] h-[1em]" width="35" height="31" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0 4.42857C0 1.98594 1.96191 0 4.375 0H30.625C33.0381 0 35 1.98594 35 4.42857V26.5714C35 29.0141 33.0381 31 30.625 31H4.375C1.96191 31 0 29.0141 0 26.5714V4.42857ZM4.375 8.85714V26.5714H15.3125V8.85714H4.375ZM30.625 8.85714H19.6875V26.5714H30.625V8.85714Z"
                        fill="white" />
                </svg>
                <p class="font-title font-bold text-light">AdaBoards</p>
            </div>
            <button class="text-gray-800 font-title font-bold! bg-primary rounded-md px-3 py-1">Sign In</button>
        </div>
        <div class="flex flex-col items-center gap-6">
            <p class="font-fancy text-light text-4xl">
                Organize your work <span class="text-primary">seamlessly</span>
            </p>
            <p class="font-body font-normal text-light">A simple, beautiful way to manage tasks and projects with your
                team</p>
            <button class="font-title font-bold! bg-primary text-gray-800 rounded-md px-3 py-1">Get started for
                free</button>
        </div>
        <div class="flex flex-col items-center gap-6 max-w-5xl mx-auto">
            <div class="flex flex-col items-center mt-16">
                <p class="font-body font-normal text-light text-3xl">Simple yet powerful features</p>
            </div>
            <!-- div cards -->
            <div class="grid grid-cols-3 gap-8">
                <div class="border-2 border-light rounded-md p-4">
                    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 6.85714C0 3.075 3.02695 0 6.75 0H47.25C50.973 0 54 3.075 54 6.85714V41.1429C54 44.925 50.973 48 47.25 48H6.75C3.02695 48 0 44.925 0 41.1429V6.85714ZM6.75 13.7143V41.1429H23.625V13.7143H6.75ZM47.25 13.7143H30.375V41.1429H47.25V13.7143Z"
                            fill="#C6ABFF" />
                    </svg>
                    <p class="font-title font-bold text-light text-2xl">Flexible boards</p>
                    <p class="font-body text-light">Organize tasks into customizable boards and columns to fit your
                        workflow</p>
                </div>
                <div class="border-2 border-light rounded-md p-4">
                    <svg width="52" height="37" viewBox="0 0 52 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M50.9119 1.08381C52.3627 2.5289 52.3627 4.87572 50.9119 6.32081L21.201 35.9162C19.7502 37.3613 17.3943 37.3613 15.9435 35.9162L1.08805 21.1185C-0.362683 19.6734 -0.362683 17.3266 1.08805 15.8815C2.53878 14.4364 4.89477 14.4364 6.3455 15.8815L18.5781 28.0549L45.6661 1.08381C47.1168 -0.361272 49.4728 -0.361272 50.9236 1.08381H50.9119Z"
                            fill="#C6ABFF" />
                    </svg>
                    <p class="font-title font-bold text-light text-2xl">Check sh*t done</p>
                    <p class="font-body text-light">Keep track of your progress and iterate through your tasks
                        flowlessly</p>
                </div>
                <div class="border-2 border-light rounded-md p-4">
                    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 6.85714C0 3.075 3.02695 0 6.75 0H47.25C50.973 0 54 3.075 54 6.85714V41.1429C54 44.925 50.973 48 47.25 48H6.75C3.02695 48 0 44.925 0 41.1429V6.85714ZM6.75 13.7143V41.1429H23.625V13.7143H6.75ZM47.25 13.7143H30.375V41.1429H47.25V13.7143Z"
                            fill="#C6ABFF" />
                    </svg>
                    <p class="font-title font-bold text-light text-2xl">Team collaboration</p>
                    <p class="font-body text-light">Invite team members to boards and collaborate on projects together
                    </p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center mt-auto">
            <p class="font-body font-normal text-light">2025 AdaBoards</p>
        </div>
    </div>
</template>