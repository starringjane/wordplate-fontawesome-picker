<template>
    <div
        class="sjwfp fixed z-100001 inset-0 min-h-screen bg-gray-500/75 transition-opacity box-border"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div class="block h-full py-12 px-4 text-center box-border overflow-y-scroll">
            <div class="flex items-center justify-center min-h-full text-center box-border">
                <div class="block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-screen-md sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mt-3 text-center sm:text-left w-full">
                                <form class="relative flex items-center" @submit.prevent>
                                    <button
                                        class="absolute text-lg left-2 !bg-transparent !border-none"
                                        type="submit"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z"/></svg>
                                    </button>

                                    <input
                                        v-model="search"
                                        class="bg-gray-50 rounded p-3 pl-10 w-full border border-solid border-gray-400 focus-within:outline-none"
                                        placeholder="Search..."
                                    >

                                    <button
                                        v-if="search"
                                        class="absolute text-lg right-2 !bg-transparent !border-none"
                                        @click="reset"
                                        type="button"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM180.7 180.7c-6.2 6.2-6.2 16.4 0 22.6L233.4 256l-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L256 278.6l52.7 52.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L278.6 256l52.7-52.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 233.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0z"/></svg>
                                    </button>
                                </form>

                                <div v-if="availableStyles" class="flex items-center my-3">
                                    <p class="w-1/2">
                                        Select icon category:
                                    </p>
                                    <select
                                        id="grid-state"
                                        v-model="selectedStyle"
                                        class="block appearance-none w-1/2 bg-grey-lighter border border-solid border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
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

                                <div v-if="icons && icons.length" class="grid grid-cols-6 md:grid-cols-8 xl:grid-cols-12 mt-2 text-center">
                                    <div
                                        v-for="icon in icons"
                                        :key="icon.class"
                                    >
                                        <button
                                            class="sjwfp p-4 text-2xl text-gray-700 rounded !bg-transparent !border-none hover:text-white hover:!bg-primary-500 transition-colors"
                                            v-html="icon.svg"
                                            @click="setIcon(icon)"
                                        />
                                    </div>
                                </div>

                                <p
                                    v-if="icons !== null && icons.length === 0"
                                    class="text-red-400 mt-4 mb-8"
                                >
                                    No icons were found
                                </p>

                                <div v-if="pages" class="flex justify-center items-center mt-4">
                                    <button
                                        class="!bg-transparent !border-none"
                                        :class="selectedPage > 1 ? 'visible' : 'invisible'"
                                        @click="prevPage"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l192-192c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256 235.3 436.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-192-192z"/></svg>
                                    </button>

                                    <p class="px-4">
                                        {{ selectedPage }} &nbsp; / &nbsp; {{ pages }}
                                    </p>

                                    <button
                                        class="!bg-transparent !border-none"
                                        @click="nextPage"
                                        :class="selectedPage !== parseInt(pages) ? 'visible' : 'invisible'"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M299.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-192 192c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L265.4 256 84.7 75.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l192 192z"/></svg>
                                    </button>
                                </div>

                                <div
                                    v-if="recentIcons.length > 0"
                                >
                                    <p>Recent icons:</p>
                                    <div class="grid grid-cols-10 w-full mt-2 text-center">
                                        <button
                                            v-for="icon in recentIcons.slice(0, 10)"
                                            :key="icon.class"
                                            class="p-2 text-xl text-gray-700 rounded !bg-transparent !border-none hover:text-white hover:!bg-primary-500 transition-colors"
                                            @click="setIcon(icon)"
                                            v-html="icon.svg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div v-if="asksForClear" class="bg-white px-4 pt-3 sm:px-6 sm:flex">
                        <div class="text-sm font-bold">
                            Are you sure you want to clear the field?
                        </div>
                    </div>

                    <div v-if="asksForClear" class="bg-white px-4 py-3 sm:px-6 sm:flex">
                        <button
                            type="button"
                            class="mt-3 mr-3 items-center inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-red-100 border border-solid border-red-200 text-base font-medium text-red-700 hover:bg-red-200 sm:mt-0 sm:w-auto sm:text-sm"
                            @click="confirmClear"
                        >
                            Yes, clear the field
                        </button>

                        <button
                            type="button"
                            class="mt-3 items-center inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-gray-50 border border-solid border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-100 sm:mt-0 sm:w-auto sm:text-sm"
                            @click="cancelClear"
                        >
                            No, keep the icon
                        </button>
                    </div>

                    <div v-if="!asksForClear" class="bg-white px-4 py-3 sm:px-6 sm:flex">
                        <button
                            type="button"
                            class="mt-3 mr-3 items-center inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-red-100 border border-solid border-red-200 text-base font-medium text-red-700 hover:bg-red-200 sm:mt-0 sm:w-auto sm:text-sm"
                            @click="askForClear"
                        >
                            Clear
                        </button>

                        <button
                            type="button"
                            class="mt-3 items-center inline-flex justify-center rounded-md shadow-sm px-4 py-2 bg-gray-50 border border-solid border-gray-200 text-base font-medium text-gray-700 hover:bg-gray-100 sm:mt-0 sm:w-auto sm:text-sm"
                            @click="cancel"
                        >
                            Close
                        </button>

                        <button
                            v-if="selectedIcon"
                            id="sjwfpUseIconButton"
                            type="button"
                            class="mt-3 items-center w-full inline-flex justify-center rounded-md bg-primary-500 border border-solid border-primary-600 shadow-sm px-4 py-2 text-base font-medium text-white hover:bg-blue-500 sm:mt-0 sm:ml-3 sm:text-sm"
                            @click="useIcon"
                        >
                            <span>Use</span>

                            <span
                                class="mx-3 text-lg"
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

    watch: {
        search (value) {
            clearTimeout(this._searchTimeout);
            if (!value) {
                this.reset();
                return;
            }
            this._searchTimeout = setTimeout(() => {
                this.searchForIcon();
            }, 300);
        },
    },

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
            window.WordplateFontawesomePicker.close();
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
            const el = window.WordplateFontawesomePicker.inputElement;
            el.value = '';
            this.$nextTick(() => {
                jQuery(el).trigger('change');
                el.dispatchEvent(new Event('change', { bubbles: true }));
            });
            this.close();
        },

        useIcon () {
            const el = window.WordplateFontawesomePicker.inputElement;
            el.value = this.selectedIcon.class;
            this.$nextTick(() => {
                jQuery(el).trigger('change');
                el.dispatchEvent(new Event('change', { bubbles: true }));
            });
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
                this.reset();
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
