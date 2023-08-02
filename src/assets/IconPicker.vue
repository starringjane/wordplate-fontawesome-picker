/* eslint-disable vue/script-indent */
<template>
    <div
        class="sjwfp sjwfp-fixed sjwfp-z-10 sjwfp-inset-0 sjwfp-min-h-screen sjwfp-bg-gray-500 sjwfp-bg-opacity-75 sjwfp-transition-opacity sjwfp-box-border"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div class="sjwfp-block sjwfp-h-full sjwfp-py-12 sjwfp-px-4 sjwfp-text-center sjwfp-box-border sjwfp-overflow-y-scroll">
            <div class="sjwfp-flex sjwfp-items-center sjwfp-justify-center sjwfp-min-h-full sjwfp-text-center sjwfp-box-border">
                <div class="sjwfp-block sjwfp-align-bottom sjwfp-bg-white sjwfp-rounded-lg sjwfp-text-left sjwfp-overflow-hidden sjwfp-shadow-xl sjwfp-transform sjwfp-transition-all sm:sjwfp-my-8 sm:sjwfp-align-middle sm:sjwfp-max-w-screen-md sm:sjwfp-w-full">
                    <div class="sjwfp-bg-white sjwfp-px-4 sjwfp-pt-5 sjwfp-pb-4 sm:sjwfp-p-6 sm:sjwfp-pb-4">
                        <div class="sm:sjwfp-flex sm:sjwfp-items-start">
                            <div class="sjwfp-mt-3 sjwfp-text-center sm:sjwfp-text-left sjwfp-w-full">
                                <form class="sjwfp-relative sjwfp-flex sjwfp-items-center" @submit.prevent="searchForIcon">
                                    <button
                                        class="sjwfp-absolute sjwfp-text-lg sjwfp-left-2 !sjwfp-bg-transparent !sjwfp-border-none"
                                        type="submit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"/></svg>
                                    </button>

                                    <input
                                        v-model="search"
                                        class="sjwfp-bg-gray-50 sjwfp-rounded sjwfp-p-3 sjwfp-pl-10 sjwfp-w-full sjwfp-border sjwfp-border-solid sjwfp-border-gray-400 focus-within:sjwfp-outline-none"
                                        placeholder="Search..."
                                    >

                                    <button
                                        v-if="search"
                                        class="sjwfp-absolute sjwfp-text-lg sjwfp-right-2 !sjwfp-bg-transparent !sjwfp-border-none"
                                        @click="reset"
                                        type="button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM180.7 180.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z"/></svg>
                                    </button>
                                </form>

                                <div v-if="availableStyles" class="sjwfp-flex sjwfp-items-center sjwfp-my-3">
                                    <p class="sjwfp-w-1/2">
                                        Select icon category:
                                    </p>
                                    <select
                                        id="grid-state"
                                        v-model="selectedStyle"
                                        class="sjwfp-block sjwfp-appearance-none sjwfp-w-1/2 sjwfp-bg-grey-lighter sjwfp-border sjwfp-border-solid sjwfp-border-grey-lighter sjwfp-text-grey-darker sjwfp-py-3 sjwfp-px-4 sjwfp-pr-8 sjwfp-rounded sjwfp-leading-tight sjwfp-focus:outline-none sjwfp-focus:bg-white sjwfp-focus:border-grey"
                                        @change="resetIndex()"
                                    >
                                        <option value="">
                                            All
                                        </option>

                                        <option
                                            v-for="style in availableStyles"
                                            :key="style"
                                            :value="style"
                                            v-text="style"
                                        />
                                    </select>
                                </div>

                                <div v-if="icons && icons.length" class="sjwfp-grid sjwfp-grid-cols-6 md:sjwfp-grid-cols-8 xl:sjwfp-grid-cols-12 sjwfp-mt-2 sjwfp-text-center">
                                    <div
                                        v-for="icon in icons"
                                        :key="icon.class"
                                    >
                                        <button
                                            class="sjwfp sjwfp-p-4 sjwfp-text-2xl sjwfp-text-gray-700 sjwfp-rounded !sjwfp-bg-transparent !sjwfp-border-none hover:sjwfp-text-white hover:!sjwfp-bg-primary-500 sjwfp-transition-colors"
                                            v-html="icon.svg"
                                            @click="setIcon(icon)"
                                        />
                                    </div>
                                </div>

                                <p
                                    v-if="icons !== null && icons.length === 0"
                                    class="sjwfp-text-red-400 sjwfp-mt-4 sjwfp-mb-8"
                                >
                                    No icons were found
                                </p>

                                <div v-if="pages" class="sjwfp-flex sjwfp-justify-center sjwfp-items-center sjwfp-mt-4">
                                    <button
                                        class="!sjwfp-bg-transparent !sjwfp-border-none"
                                        :class="selectedPage > 1 ? 'sjwfp-visible' : 'sjwfp-invisible'"
                                        @click="prevPage"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"/></svg>
                                    </button>

                                    <p class="sjwfp-px-4">
                                        {{ selectedPage }} &nbsp; / &nbsp; {{ pages }}
                                    </p>

                                    <button
                                        class="!sjwfp-bg-transparent !sjwfp-border-none"
                                        @click="nextPage"
                                        :class="selectedPage !== parseInt(pages) ? 'sjwfp-visible' : 'sjwfp-invisible'"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"/></svg>
                                    </button>
                                </div>

                                <div
                                    v-if="recentIcons.length > 0"
                                >
                                    <p>Recent icons:</p>
                                    <div class="sjwfp-grid sjwfp-grid-cols-10 sjwfp-w-full sjwfp-mt-2 sjwfp-text-center">
                                        <button
                                            v-for="icon in recentIcons.slice(0, 10)"
                                            :key="icon.class"
                                            class="sjwfp-p-2 sjwfp-text-xl sjwfp-text-gray-700 sjwfp-rounded !sjwfp-bg-transparent !sjwfp-border-none hover:sjwfp-text-white hover:!sjwfp-bg-primary-500 sjwfp-transition-colors"
                                            @click="setIcon(icon)"
                                            v-html="icon.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="asksForClear" class="sjwfp-bg-white sjwfp-px-4 sjwfp-pt-3 sm:sjwfp-px-6 sm:sjwfp-flex">
                        <div class="sjwfp-text-sm sjwfp-font-bold">
                            Are you sure you want to clear the field?
                        </div>
                    </div>

                    <div v-if="asksForClear" class="sjwfp-bg-white sjwfp-px-4 sjwfp-py-3 sm:sjwfp-px-6 sm:sjwfp-flex">
                        <button
                            type="button"
                            class="sjwfp-mt-3 sjwfp-mr-3 sjwfp-items-center sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-bg-red-100 sjwfp-border sjwfp-border-solid sjwfp-border-red-200 sjwfp-text-base sjwfp-font-medium sjwfp-text-red-700 hover:sjwfp-bg-red-200 sm:sjwfp-mt-0 sm:sjwfp-w-auto sm:sjwfp-text-sm"
                            @click="confirmClear"
                        >
                            Yes, clear the field
                        </button>

                        <button
                            type="button"
                            class="sjwfp-mt-3 sjwfp-items-center sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-bg-gray-50 sjwfp-border sjwfp-border-solid sjwfp-border-gray-200 sjwfp-text-base sjwfp-font-medium sjwfp-text-gray-700 hover:sjwfp-bg-gray-100 sm:sjwfp-mt-0 sm:sjwfp-w-auto sm:sjwfp-text-sm"
                            @click="cancelClear"
                        >
                            No, keep the icon
                        </button>
                    </div>

                    <div v-if="!asksForClear" class="sjwfp-bg-white sjwfp-px-4 sjwfp-py-3 sm:sjwfp-px-6 sm:sjwfp-flex">
                        <button
                            type="button"
                            class="sjwfp-mt-3 sjwfp-mr-3 sjwfp-items-center sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-bg-red-100 sjwfp-border sjwfp-border-solid sjwfp-border-red-200 sjwfp-text-base sjwfp-font-medium sjwfp-text-red-700 hover:sjwfp-bg-red-200 sm:sjwfp-mt-0 sm:sjwfp-w-auto sm:sjwfp-text-sm"
                            @click="askForClear"
                        >
                            Clear
                        </button>

                        <button
                            type="button"
                            class="sjwfp-mt-3 sjwfp-items-center sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-bg-gray-50 sjwfp-border sjwfp-border-solid sjwfp-border-gray-200 sjwfp-text-base sjwfp-font-medium sjwfp-text-gray-700 hover:sjwfp-bg-gray-100 sm:sjwfp-mt-0 sm:sjwfp-w-auto sm:sjwfp-text-sm"
                            @click="cancel"
                        >
                            Close
                        </button>

                        <button
                            v-if="selectedIcon"
                            id="sjwfpUseIconButton"
                            type="button"
                            class="sjwfp-mt-3 sjwfp-items-center sjwfp-w-full sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-bg-primary-500 sjwfp-border sjwfp-border-solid sjwfp-border-primary-600 sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-text-base sjwfp-font-medium sjwfp-text-white hover:sjwfp-bg-blue-500 sm:sjwfp-mt-0 sm:sjwfp-ml-3 sm:sjwfp-text-sm"
                            @click="useIcon"
                        >
                            <span>Use</span>

                            <span
                                class="sjwfp-mx-3 sjwfp-text-lg"
                                v-html="selectedIcon.svg"
                            />

                            <span>as icon</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var $ = window.jQuery;

export default {
    data: () => ({
        iconsPerPage: 60,
        search: null,
        results: null,
        selectedIcon: null,
        selectedStyle: '',
        selectedPage: 1,
        recentIcons: [],
        asksForClear: false,
    }),

    computed: {
        availableStyles () {
            if (window.WordplateFontawesomePickerLocalized && window.WordplateFontawesomePickerLocalized.availableStyles) {
                return window.WordplateFontawesomePickerLocalized.availableStyles;
            }

            return null;
        },

        filteredResults () {
            if (this.results === null) {
                return null;
            }

            if (this.selectedStyle === '') {
                return this.results;
            }

            return this.results.filter((result) => {
                return result.style === this.selectedStyle;
            });
        },

        icons () {
            if (this.filteredResults === null) {
                return null;
            }

            // Paginate results
            return this.filteredResults.slice(this.iconsPerPage * this.selectedPage - this.iconsPerPage, this.iconsPerPage * this.selectedPage);
        },

        pages () {
            if (this.filteredResults === null) {
                return 0;
            }

            return Math.ceil(this.filteredResults.length / this.iconsPerPage);
        },
    },

    created () {
        if (window.localStorage.getItem('janes-wordpress-theme-recent-icons-v6')) {
            this.recentIcons = JSON.parse(window.localStorage.getItem('janes-wordpress-theme-recent-icons-v6'));
        }
    },

    methods: {
        cancel () {
            this.close();
        },

        close () {
            this.$destroy();
            jQuery('#iconpicker').remove();
        },

        setIcon (icon) {
            this.selectedIcon = icon;
            this.cancelClear();
            this.srollToUseButton();
        },

        askForClear () {
            this.asksForClear = true;
        },

        cancelClear () {
            this.asksForClear = false;
        },

        confirmClear () {
            window.WordplateFontawesomePicker.inputElement.value = '';
            this.$nextTick(() => { jQuery(window.WordplateFontawesomePicker.inputElement).trigger('change'); });
            this.close();
        },

        useIcon () {
            window.WordplateFontawesomePicker.inputElement.value = this.selectedIcon.class;
            this.$nextTick(() => { jQuery(window.WordplateFontawesomePicker.inputElement).trigger('change'); });
            const tempRecent = this.recentIcons.filter((icon) =>
                JSON.stringify(icon) !== JSON.stringify(this.selectedIcon)
            );
            tempRecent.unshift(this.selectedIcon);
            this.recentIcons = tempRecent;
            window.localStorage.setItem('janes-wordpress-theme-recent-icons-v6', JSON.stringify(tempRecent));
            this.selectedIcon = null;

            this.close();
        },

        srollToUseButton() {
            this.$nextTick(() => {
                const el = document.getElementById('sjwfpUseIconButton');

                if (el) {
                    el.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                    });
                }
            });
        },

        searchForIcon() {
            if (!this.search) {
                this.resetSearch();
                return;
            }

            $.ajax({
                type: 'POST',
                url: window.WordplateFontawesomePickerLocalized.ajax_uri,
                data: {
                    action: 'sjwfp_search',
                    search: this.search,
                },
                success: (response) => {
                    this.results = response.results;
                    this.resetIndex();
                },
            });
        },

        prevPage () {
            if (this.selectedPage > 1) {
                this.selectedPage--;
            }
        },

        nextPage () {
            if (this.selectedPage < this.pages) {
                this.selectedPage++;
            }
        },

        resetIndex () {
            this.selectedPage = 1;
        },

        reset () {
            this.search = null;
            this.selectedPage = 1;
            this.results = null;
        },
    },
};
</script>
