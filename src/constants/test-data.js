export const Tayisiya = {
    name: 'Таисия',
    birthDay: '2023-09-21',
    isGirl: true,
    weight: 3.40,
    height: 52,

    age() {
        const now = new Date()
        const birth = new Date(this.birthDay)
        return now.getDate() >= birth.getDate() ? now.getMonth() - birth.getMonth() : now.getMonth() - birth.getMonth() - 1
    }
}