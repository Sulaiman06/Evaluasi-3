// Soal 1
for(let x = 1; x < 10; x++) {
    for(let y = 1; y < 10; y++) {
        if(x == y || y == 5) {
            document.write(2 * x - 1)
        } else if(x + y == 10 || x == 5 ) {
            document.write(' ' + 2 * y - 2 + ' ')
        } else {
            document.write(` ~ `)
        }
    }
    document.write(`<br>`)
}

document.write(`<br><br>`)

// Soal 2
for(let x = 1; x < 10; x++) {
    for(let y = 1; y < 10; y++) {
        if(y <= x) {
            document.write(' ' + 2 * y - 1 + ' ')
        } else {
            document.write(` ~ `)
        }
    }
    document.write(`<br>`)
}

document.write(`<br><br>`)

// Soal 3
for(let x = 9; x > 0; x--) {
    for(let y = 1; y < 10; y++) {
        if(x <= y) {
            document.write(' ' + 2 * x - 2 + ' ')
        } else {
            document.write(` ~ `)
        }
    }
    document.write(`<br>`)
}

document.write(`<br><br>`)

// Soal 4
for(let x = 1; x < 10; x++) {
    for(let y = 1; y < 10; y++) {
        if(x == y) {
            document.write(2 * x - 1)
        } else if(x + y == 10) {
            document.write(' ' + 2 * y - 2 + ' ')
        } else if(x >= y && x + y >= 10) {
            document.write(' B ')
        } else if(x <= y && x + y <= 10) {
            document.write(' A ')
        } else {
            document.write(` ~ `)
        }
    }
    document.write(`<br>`)
}

document.write(`<br><br>`)

// Soal 5
for(let x = 1; x < 10; x++) {
    for(let y = 1; y < 10; y++) {
        if(x == y) {
            document.write(2 * x - 1)
        } else if(x + y == 10) {
            document.write(' ' + 2 * y - 2 + ' ')
        } else if(x <= y && x + y >= 10) {
            document.write(' B ')
        } else if(x >= y && x + y <= 10) {
            document.write(' A ')
        } else {
            document.write(` ~ `)
        }
    }
    document.write(`<br>`)
}