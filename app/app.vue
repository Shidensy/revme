<script setup lang="ts">
useHead({
    title: "Revme",
    meta: [
        {name: "description", content: "RevMe - Your Ultimate Review Platform"},
        {name: "viewport", content: "width=device-width, initial-scale=1"},
    ],
    link: [
        {
            rel: "icon",
            type: "image/svg",
            href: "/favicon.svg",
        },
    ],
});
</script>

<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
