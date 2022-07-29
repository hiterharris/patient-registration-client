export const formatDateISO = (date) => {
    date.setFullYear(date.getFullYear() - 18);
    const isoString = date.toISOString().replaceAll('/', '-').slice(0, -14);
    return isoString;
};
