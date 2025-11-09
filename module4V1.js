// cache ->> kono ekta kaj er process dhore raakhe . aber jdi ai kaj ta kora lage tahole pura kaj ta suru theke na kore oi jinish ta cache theke serve kore dibo 

const dataCache = new Map();
const expensiveTask = (id) => {
    console.log('Run th expensive Task for:', id)
    return {
        id: id,
        data: `some data for :${id}`,
        timeStamp: new Date().getTime(),
    };
};

const getData = (id) => {
    if (dataCache.has(id)) { //age cache a check kortese ai kaj age perform hoise kina
        console.log(`CACHE HIT FOR ID:`, id)
        return dataCache.get(id); //perform hoise cache thekei return hobe
    }
    console.log("CACHE MISS FOR ID", id)
    const data = expensiveTask(id);

    dataCache.set(id,data)//cache er moddhe perform da set hoitese
    return data;
};

console.log(dataCache);
console.log(getData(123))
console.log(getData(123))

console.log(dataCache)


Map(0) {}//line 25 -->empty obj karon dataCache faka
CACHE MISS FOR ID 123   //
Run th expensive Task for: 123
{ id: 123, data: 'some data for :123', timeStamp: 1762635802634 }

//27 no console er jonno
CACHE HIT FOR ID: 123  // aiber cache a data paise
{ id: 123, data: 'some data for :123', timeStamp: 1762635802634 }
//29 no console er jonno
Map(1) {
  123 => { id: 123, data: 'some data for :123', timeStamp: 1762635802634 }
}




