export function showRelativeDate(date: Date) {
    if (isNaN(date.getTime())) {
        return 'date invalide'
    }
    const now = new Date();
    if (now.getDate() == date.getDate() && now.getMonth() == date.getMonth() && now.getFullYear() == date.getFullYear() && now.getHours() == date.getHours() && now.getMinutes() == date.getMinutes()) {
        return 'maintenant'
    }
    const numberOfDays = now.getDate() - date.getDate();
    if (numberOfDays >= 1) {
        if (numberOfDays == 1) {
            return 'il y a 1 jour'
        }
        return `il y a ${numberOfDays} jours`
    }
    const numberOfHours = now.getHours() - date.getHours();
    if (numberOfHours > 0) {
        return `il y a ${numberOfHours} heures`
    }
}