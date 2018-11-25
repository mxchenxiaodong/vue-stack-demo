
// let storage = []

// function record() {
//   storage.push(target)
// }

// function replay () {
//   storage.forEach(run => run())
// }

// 记录下来
// record()

// 第一次计算
// target()

// price = 20
// console.log(total)

// replay()
// console.log(total)


class Dep {
  constructor () {
    this.subscribers = []
  }

  depend() {
    if (target && !this.subscribers.includes(target)) {
      this.subscribers.push(target)
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub())
  }
}

const dep = new Dep()

let price = 5
let quantity = 2
let total = 0
let target = null

function watcher(myFunc) {
  target = myFunc
  dep.depend()
  target()
  target = null
}

watcher(() => { total = price * quantity })

price = 20
console.log(total)

dep.notify()
console.log(total)







class Dep {
  constructor () {
    this.subscribers = []
  }

  depend() {
    console.log("now target is ", target)
    if (target && !this.subscribers.includes(target)) {
      console.log("target is new, add to subscribers....")
      this.subscribers.push(target)
    }
  }

  notify() {
    this.subscribers.forEach(sub => sub())
  }
}

let data = { price: 5, quantity: 2 }
target = null

Object.keys(data).forEach(key => {
  let internalValue = data[key]
  const dep = new Dep()

  Object.defineProperty(data, key, {
    get() {
      // 当获取属性值时，将需要处理的函数添加
      dep.depend()

      console.log(`Getting ${key}: ${internalValue}`)
      return internalValue
    },
    set(newVal) {
      // 这里如果是对象，应该遍历比较？
      if (internalValue !== newVal ) {
        internalValue = newVal
        //当属性A设置新值的时候，重新计算依赖属性A的各个属性。
        // 通过watcher绑定相关方法
        dep.notify()
      } else {
        console.log(`Getting ${key}: ${internalValue}, no change!`)
      }
    }
  })
})

function watcher(myFunc) {
  console.log("target is ", target)
  target = myFunc
  target()
  target = null
}

watcher(() => { data.total = data.price * data.quantity })

// 如果针对针对属性，添加对应的处理函数。

data.total
data.price = 100
data.total