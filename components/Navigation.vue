<template>
  <header class="bg-transparent">
    <!-- Desktop Nav -->

    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Contact</span>
          <NuxtLink to="/">
            <h1 class="font-mono text-xl sm:text-2xl uppercase">Subramaniam Lab</h1>
            </NuxtLink>
        </a>
      </div>
      <div class="flex lg:hidden">
        <!-- Hamburger Icon -->
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          @click="mobileMenuOpen = true">
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <Popover class="relative">
          <PopoverButton class="flex items-center gap-x-1 text-sm/6 font-semibold text-gray-900">
            Research
            <ChevronDownIcon class="size-5 flex-none text-gray-400" aria-hidden="true" />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1">
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div class="p-4">
                <div
                  v-for="item in research"
                  :key="item.name"
                  class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
                  <div
                    class="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <component
                      :is="item.icon"
                      class="size-6 text-gray-600 group-hover:text-indigo-600"
                      aria-hidden="true" />
                  </div>
                  <div class="flex-auto">
                    <NuxtLink :to="`/research${item.path}`" class="block font-semibold text-gray-900">
                      {{ item.name }}
                      <span class="absolute inset-0" />
                    </NuxtLink>
                    <p class="mt-1 text-gray-600">{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                <a
                  v-for="item in callsToAction"
                  :key="item.name"
                  :href="item.href"
                  class="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100">
                  <component :is="item.icon" class="size-5 flex-none text-gray-400" aria-hidden="true" />
                  {{ item.name }}
                </a>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>

        <NuxtLink to="/publications" class="text-sm/6 font-semibold text-gray-900">Publications</NuxtLink>
        <NuxtLink to="/teaching" class="text-sm/6 font-semibold text-gray-900">Teaching</NuxtLink>
        <NuxtLink to="/members" class="text-sm/6 font-semibold text-gray-900">Members</NuxtLink>
        <NuxtLink to="/contact" class="text-sm/6 font-semibold text-gray-900">Contact</NuxtLink>
      </PopoverGroup>

      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
        </div> -->
    </nav>

    <!-- Mobile Nav -->
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <h1 class="font-mono text-xl sm:text-2xl uppercase">Subramaniam Lab</h1>
          </NuxtLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  Research
                  <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'size-5 flex-none']" aria-hidden="true" />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <DisclosureButton
                    v-for="item in [...research, ...callsToAction]"
                    :key="item.name"
                    as="a"
                    :href="`/research${item.path}`"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  >
                </DisclosurePanel>
              </Disclosure>
              <NuxtLink
                to="/publications"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Publications</NuxtLink
              >
              <NuxtLink
                to="/teaching"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Teaching</NuxtLink
              >
              <NuxtLink
                to="/members"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Members</NuxtLink
              >
              <NuxtLink
                to="/contact"
                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >Contact</NuxtLink
              >
            </div>
            <!-- <div class="py-6">
                <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
              </div> -->
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/vue'

import {
  ArrowUpRightIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'

const research = [
  {
    name: 'Insulin Resistance',
    description: '',
    path: '/systems-medicine/insulin-resistance',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Liver Regeneration Pathologies',
    description: '',
    path: '/systems-medicine/liver-regeneration-pathologies',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Neuropathologies',
    description: '',
    path: '/systems-medicine/neuropathologies',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Stress and Endothelial Physiology',
    description: '',
    path: '/systems-medicine/stress-endothelial-physiology',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Striated Muscle Physiology and Pathology',
    description: '',
    path: '/systems-medicine/striated-muscle-physiology-pathology',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Systems Vaccinology',
    description: '',
    path: '/systems-medicine/systems-vaccinology',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Informatics Infrastructure',
    description: '',
    path: '/informatics-infrastructure',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Macrophage Systems Biology',
    description: '',
    path: '/macrophage-systems-biology',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Quantitative Transcriptomics',
    description: '',
    path: '/quantitative-transcriptomics',
    icon: ArrowUpRightIcon,
  },
  {
    name: 'Systems Computational Modeling',
    description: '',
    path: '/systems-computational-modeling',
    icon: ArrowUpRightIcon,
  },
]
const callsToAction = [
  { name: 'Action 1', href: '#', icon: PlayCircleIcon },
  { name: 'Action 2', href: '#', icon: PhoneIcon },
]

const mobileMenuOpen = ref(false)
</script>
