/* eslint-disable @typescript-eslint/no-unused-vars */

type dateProps = {
    compareTo?: string
}

export function useDateFormatter() {

    function formatDate(strDate: string | undefined, compareTo: dateProps = { compareTo: '' }) {
        if (!strDate) {
            return ''; // or handle the undefined case
        }
        let formattedDate = '';
        let sameAsStart = false;
        const dateStr = strDate;

        // Step 1: Parse the date string into a Date object - Date format : YYYY-MM-DD hh-mm-ss
        const date = new Date(dateStr);

        // Step 2: Get the user's preferred language
        const userLanguage = 'en'
        const hourFormat = userLanguage === 'en' ? true : false

        if (typeof compareTo.compareTo === 'string') {
            // taking dates without hour
            const startDate = new Date(compareTo.compareTo.slice(0, 10))
            const endDate = new Date(dateStr.slice(0, 10))
            sameAsStart = startDate.getTime() === endDate.getTime() ? true : false
        }

        const year = date.toLocaleDateString(userLanguage, { year: "numeric" })
        const month = date.toLocaleDateString(userLanguage, { month: "2-digit" })
        // const weekday = date.toLocaleDateString(userLanguage, { weekday: "short" })
        const day = date.toLocaleDateString(userLanguage, { day: "2-digit" })
        const hour = date.toLocaleTimeString(userLanguage, { hour: "2-digit", hour12: hourFormat, minute: "2-digit" })

        // const weekdayCap = weekday.charAt(0).toUpperCase() + weekday.slice(1)

        // Step 3: Format the date according to user language
        formattedDate = `${day}-${month}-${year}`

        // returns only hour if day is same as start date
        if (sameAsStart) {
            formattedDate = `${hour}`;
        }

        return formattedDate
    }

    return { formatDate };
}
