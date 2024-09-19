export const calculateAge = (): number => {
    const birthday = new Date("2003-07-22")
    const today = new Date()

    let age = today.getFullYear() - birthday.getFullYear()
    const monthDif = today.getMonth() - birthday.getMonth()
    const dayDif = today.getDate() - birthday.getDate()

    if(monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
        age--
    }

    return age
}

export const calculateTimeInCollege = (): number => {
    const collegeStart = new Date("2021/08/31")
    const today = new Date()

    let yearsInCollege = today.getFullYear() - collegeStart.getFullYear()
    const monthDif = today.getMonth() - collegeStart.getMonth()
    const dayDif = today.getDate() - collegeStart.getDate()

    if(monthDif < 0 || (monthDif === 0 && dayDif < 0)) {
        yearsInCollege--
    }

    return yearsInCollege
}