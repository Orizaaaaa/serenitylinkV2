export function formatDate(isoDateString: string): string {
    const date = new Date(isoDateString);
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // UTCMonth is zero-based
    const year = date.getUTCFullYear();

    return `${day}/${month}/${year}`;
}

export function formatCatrgory(text: string, maxLength: number = 34): string {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + "...";
    }
    return text;
}


export const statusChange = (value: string) => {
    if (value === 'Di Proses') {
        return ('bg-[#FF7F0A]')
    } else if (value === 'Menunggu') {
        return ('bg-primary')
    } else if (value === 'Selesai') {
        return ('bg-lime-700')
    }
}