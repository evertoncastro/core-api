
const {Firestore} = require('@google-cloud/firestore');

const firestore = new Firestore();

async function testFireStore(){
    try{
        const document = firestore.doc('posts/intro-to-firestore');
        await document.set({
            title: 'Welcome to Firestore',
            body: 'Hello World',
        });
        console.log('Entered new data into the document');
    }catch(e){
        console.log('Error');
        console.log(e);
    }
    
}

module.exports = {
    testFireStore: testFireStore
}