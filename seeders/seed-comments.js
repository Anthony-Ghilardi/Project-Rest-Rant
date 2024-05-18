const db = require('../models')

async function seed() {
    // Get the place, H-Tha-Ml
    let place = await db.Place.findOne({ name: 'H-Thai-ML' })

    // Creates fake sample comments
    let comment = await db.Comment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    let commentTwo = await db.Comment.create({
        author: 'Hungry Steve',
        rant: true,
        stars: 1.0,
        content: `Wow, I'm still hungry...`
    })

    let commentThree = await db.Comment.create({
        author: 'Starving Stanley',
        rant: false,
        stars: 5.0,
        content: `I'm finally full!`
    })

    // Add that comment to the place's comment array.
    place.comments.push(comment.id)
    place.comments.push(commentTwo.id)
    place.comments.push(commentThree.id)

    // Save the place now that it has comment
    await place.save()

    // Exit the program
    process.exit()
}

seed()