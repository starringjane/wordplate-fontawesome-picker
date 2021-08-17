/* eslint-disable vue/script-indent */
<template>
    <div
        class="sjwfp-fixed sjwfp-z-10 sjwfp-inset-0 sjwfp-overflow-y-auto sjwfp-bg-gray-500 sjwfp-bg-opacity-75 sjwfp-transition-opacity"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div class="sjwfp-flex sjwfp-items-center sjwfp-justify-center sjwfp-min-h-screen sjwfp-pt-4 sjwfp-px-4 sjwfp-pb-20 sjwfp-text-center">
            <div class="sjwfp-inline-block sjwfp-align-bottom sjwfp-bg-white sjwfp-rounded-lg sjwfp-text-left sjwfp-overflow-hidden sjwfp-shadow-xl sjwfp-transform sjwfp-transition-all sm:sjwfp-my-8 sm:sjwfp-align-middle sm:sjwfp-max-w-screen-md sm:sjwfp-w-full">
                <div class="sjwfp-bg-white sjwfp-px-4 sjwfp-pt-5 sjwfp-pb-4 sm:sjwfp-p-6 sm:sjwfp-pb-4">
                    <div class="sm:sjwfp-flex sm:sjwfp-items-start">
                        <div class="sjwfp-mt-3 sjwfp-text-center sm:sjwfp-text-left sjwfp-w-full">
                            <h3 class="sjwfp-mt-0">
                                Keywords icon:
                            </h3>
                            <div class="sjwfp-relative sjwfp-flex sjwfp-items-center">
                                <i class="far fa-search sjwfp-absolute sjwfp-text-lg sjwfp-left-4 sjwfp-pointer-events-none" />

                                <input
                                    v-model="search"
                                    class="sjwfp-bg-gray-50 sjwfp-rounded sjwfp-p-3 sjwfp-pl-10 sjwfp-w-full sjwfp-border sjwfp-border-gray-400 focus-within:sjwfp-outline-none"
                                >

                                <button
                                    v-if="search"
                                    class="sjwfp-absolute sjwfp-text-lg sjwfp-right-2 !sjwfp-bg-transparent"
                                    @click="resetSearch"
                                >
                                    <i class="far fa-times-circle" />
                                </button>
                            </div>

                            <div class="sjwfp-flex sjwfp-items-center sjwfp-my-3">
                                <p class="sjwfp-w-1/2">
                                    Select icon category:
                                </p>
                                <select
                                    id="grid-state"
                                    v-model="selectedOption"
                                    class="sjwfp-block sjwfp-appearance-none sjwfp-w-1/2 sjwfp-bg-grey-lighter sjwfp-border sjwfp-border-grey-lighter sjwfp-text-grey-darker sjwfp-py-3 sjwfp-px-4 sjwfp-pr-8 sjwfp-rounded sjwfp-leading-tight sjwfp-focus:outline-none sjwfp-focus:bg-white sjwfp-focus:border-grey"
                                >
                                    <option value="1">
                                        All
                                    </option>
                                    <option value="fas">
                                        Solid
                                    </option>
                                    <option value="far">
                                        Regular
                                    </option>
                                    <option value="fal">
                                        Light
                                    </option>
                                    <option value="fad">
                                        Duotone
                                    </option>
                                    <option value="fab">
                                        Brands
                                    </option>
                                </select>
                            </div>

                            <div class="sjwfp-grid sjwfp-grid-cols-6 md:sjwfp-grid-cols-8 xl:sjwfp-grid-cols-12 sjwfp-mt-2 sjwfp-text-center">
                                <div
                                    v-for="(icon, key) in icons.slice(((selectedPage - 1) * iconsPerPage), (selectedPage * iconsPerPage))"
                                    :key="key"
                                >
                                    <button
                                        class="sjwfp-p-4 sjwfp-text-2xl sjwfp-text-gray-700 sjwfp-rounded !sjwfp-bg-transparent hover:sjwfp-text-white hover:!sjwfp-bg-primary-500 sjwfp-transition-colors"
                                        @click="setIcon(icon)"
                                    >
                                        <i :class="`${icon.prefix} ${icon.class} fa-fw`" />
                                    </button>
                                </div>
                            </div>

                            <p
                                v-if="icons.length === 0"
                                class="sjwfp-text-orange sjwfp-mt-4"
                            >
                                Geen icons gevonden
                            </p>

                            <div
                                v-if="icons.length > iconsPerPage"
                                class="sjwfp-flex sjwfp-justify-center sjwfp-items-center sjwfp-mt-4"
                            >
                                <button
                                    class="sjwfp-bg-transparent"
                                    @click="prevPage"
                                >
                                    <i
                                        class="far fa-chevron-left sjwfp-text-2xl"
                                        :class="selectedPage > 1 ? 'sjwfp-visible' : 'sjwfp-invisible'"
                                    />
                                </button>

                                <p class="px-4">
                                    {{ selectedPage + '/' + parseInt(pages) }}
                                </p>

                                <button
                                    class="sjwfp-bg-transparent"
                                    @click="nextPage"
                                >
                                    <i
                                        class="far fa-chevron-right sjwfp-text-2xl"
                                        :class="selectedPage !== parseInt(pages) ? 'sjwfp-visible' : 'sjwfp-invisible'"
                                    />
                                </button>
                            </div>
                            <div
                                v-if="recentIcons.length > 0"
                            >
                                <p>Recent icons:</p>
                                <div class="sjwfp-grid sjwfp-grid-cols-10 sjwfp-w-full sjwfp-mt-2 sjwfp-text-center">
                                    <button
                                        v-for="(icon, key) in recentIcons.slice(0, 10)"
                                        :key="key"
                                        class="sjwfp-p-2 sjwfp-text-xl sjwfp-text-gray-700 sjwfp-rounded !sjwfp-bg-transparent hover:sjwfp-text-white hover:!sjwfp-bg-primary-500 sjwfp-transition-colors"
                                        @click="setIcon(icon)"
                                    >
                                        <i :class="`${icon.prefix} ${icon.class} fa-fw`" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sjwfp-bg-white sjwfp-px-4 sjwfp-py-3 sm:sjwfp-px-6 sm:sjwfp-flex">
                    <button
                        id="cancelButton"
                        type="button"
                        class="sjwfp-mt-3 sjwfp-items-center sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-bg-gray-50 sjwfp-border sjwfp-border-gray-500 sjwfp-text-base sjwfp-font-medium sjwfp-text-gray-700 hover:sjwfp-bg-gray-100 sm:sjwfp-mt-0 sm:sjwfp-w-auto sm:sjwfp-text-sm"
                        @click="cancel"
                    >
                        Cancel
                    </button>

                    <button
                        v-if="selectedIcon"
                        type="button"
                        class="sjwfp-mt-3 sjwfp-items-center sjwfp-w-full sjwfp-inline-flex sjwfp-justify-center sjwfp-rounded-md sjwfp-bg-primary-500 sjwfp-shadow-sm sjwfp-px-4 sjwfp-py-2 sjwfp-text-base sjwfp-font-medium sjwfp-text-white hover:sjwfp-bg-blue-500 sm:sjwfp-mt-0 sm:sjwfp-ml-3 sm:sjwfp-text-sm"
                        @click="useIcon"
                    >
                        <span>Use</span>

                        <i
                            class="sjwfp-px-2 sjwfp-text-lg"
                            :class="selectedIcon.prefix + ' ' + selectedIcon.class"
                        />

                        <span>as icon</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
var $ = window.jQuery;

var icons = {
    solidIcons: require('./solid.json'),
    regularIcons: require('./regular.json'),
    lightIcons: require('./light.json'),
    duotoneIcons: require('./duotone.json'),
    brandsIcons: require('./brands.json'),
};

export default {
    data: () => ({
        iconsPerPage: 60, // Amount of icons to display.
        allIcons: true,
        search: null,
        selectedIcon: null,
        selectedOption: '1',
        selectedPage: 1,
        recentIcons: [],
    }),

    computed: {
        icons () {
            const displayIcons = [];

            /**
             * If seach bar is empty push all icons in display icon array
             */
            if (this.search === null) {
                if (icons.solidIcons && this.selectedOption === 'fas') icons.solidIcons.forEach((icon) => displayIcons.push(icon));
                if (icons.regularIcons && this.selectedOption === 'far') icons.regularIcons.forEach((icon) => displayIcons.push(icon));
                if (icons.lightIcons && this.selectedOption === 'fal') icons.lightIcons.forEach((icon) => displayIcons.push(icon));
                if (icons.duotoneIcons && this.selectedOption === 'fad') icons.duotoneIcons.forEach((icon) => displayIcons.push(icon));
                if (icons.brandsIcons && this.selectedOption === 'fab') icons.brandsIcons.forEach((icon) => displayIcons.push(icon));
                // Display all icons
                if (icons.brandsIcons && icons.solidIcons && icons.duotoneIcons && icons.regularIcons && icons.lightIcons && this.selectedOption === '1') {
                    icons.solidIcons.forEach((icon) => displayIcons.push(icon));
                    icons.regularIcons.forEach((icon) => displayIcons.push(icon));
                    icons.lightIcons.forEach((icon) => displayIcons.push(icon));
                    icons.duotoneIcons.forEach((icon) => displayIcons.push(icon));
                    icons.brandsIcons.forEach((icon) => displayIcons.push(icon));
                }
                return displayIcons;
            }
            this.resetIndex();
            if (icons.solidIcons && this.selectedOption === 'fas') {
                icons.solidIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
            }
            if (icons.regularIcons && this.selectedOption === 'far') {
                icons.regularIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
            }
            if (icons.lightIcons && this.selectedOption === 'fal') {
                icons.lightIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
            }
            if (icons.duotoneIcons && this.selectedOption === 'fad') {
                icons.duotoneIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
            }
            if (icons.brandsIcons && this.selectedOption === 'fab') {
                icons.brandsIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
            }
            // Display all icons
            if (icons.brandsIcons && icons.solidIcons && icons.duotoneIcons && icons.regularIcons && icons.lightIcons && this.selectedOption === '1') {
                icons.solidIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
                icons.regularIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
                icons.lightIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
                icons.duotoneIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
                icons.brandsIcons.forEach(icon => {
                    const fullIcon = icon.prefix + ' ' + icon.class;
                    if (fullIcon.includes(this.search.toLowerCase())) displayIcons.push(icon);
                });
            }
            return displayIcons;
        },

        pages () {
            return Math.ceil(this.icons.length / this.iconsPerPage);
        },
    },

    created () {
        if (window.localStorage.getItem('janes-wordpress-theme-recent-icons')) {
            this.recentIcons = JSON.parse(window.localStorage.getItem('janes-wordpress-theme-recent-icons'));
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
        },
        resetSelectedIcon () {
            this.selectedIcon = null;
        },
        useIcon () {
            window.WordplateFontawesomePicker.inputElement.value = `${this.selectedIcon.prefix} ${this.selectedIcon.class}`;
            this.$nextTick(() => { jQuery(window.WordplateFontawesomePicker.inputElement).trigger('change'); });
            const tempRecent = this.recentIcons.filter((icon) =>
                JSON.stringify(icon) !== JSON.stringify(this.selectedIcon)
            );
            tempRecent.unshift(this.selectedIcon);
            this.recentIcons = tempRecent;
            window.localStorage.setItem('janes-wordpress-theme-recent-icons', JSON.stringify(tempRecent));
            this.selectedIcon = null;

            this.close();
        },

        fetchLightIcons () {
            if (this.selectedOption === '1' || this.selectedOption === 'fal') {
                fetch('/light.json')
                    .then(response => response.json())
                    .then(data => {
                        icons.lightIcons = data;
                        this.allIcons = true;
                    });
            } else icons.lightIcons = null;
        },

        fetchRegularIcons () {
            if (this.selectedOption === '1' || this.selectedOption === 'far') {
                fetch('/regular.json')
                    .then(response => response.json())
                    .then(data => {
                        icons.regularIcons = data;
                        this.allIcons = true;
                    });
            } else icons.regularIcons = null;
        },

        fetchSolidIcons () {
            if (this.selectedOption === '1' || this.selectedOption === 'fas') {
                fetch('/solid.json')
                    .then(response => response.json())
                    .then(data => {
                        icons.solidIcons = data;
                        this.allIcons = true;
                    });
            } else icons.solidIcons = null;
        },

        fetchDuotoneIcons () {
            if (this.selectedOption === '1' || this.selectedOption === 'fad') {
                fetch('/duotone.json')
                    .then(response => response.json())
                    .then(data => {
                        icons.duotoneIcons = data;
                        this.allIcons = true;
                    });
            } else icons.duotoneIcons = null;
        },

        fetchBrandIcons () {
            if (this.selectedOption === '1' || this.selectedOption === 'fab') {
                fetch('/brands.json')
                    .then(response => response.json())
                    .then(data => {
                        icons.brandsIcons = data;
                        this.allIcons = true;
                    });
            } else icons.brandsIcons = null;
        },

        prevPage () {
            if (this.selectedPage > 0) {
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

        resetSearch () {
            this.search = null;
        },
    },
};
</script>

<style scoped>
    @import 'https://pro.fontawesome.com/releases/v5.15.3/css/all.css';

    a[href],
    button {
        cursor: pointer;
    }
</style>
