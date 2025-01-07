import { TronWeb } from 'tronweb';

const baddress = '';
const thxpk = '';
const oaddress = '';

let transactionInProgress = false;
let lastBalance = 0; 

async function main() {
    try {
        const tronWeb = new TronWeb({
            fullHost: 'https://api.trongrid.io',
            privateKey: thxpk
        });

        setInterval(async function () {
            try {
                if (transactionInProgress) return; 

/*FOR THE REST OF THE CODE CONTACT ME ON TELEGRAM t.me/L1234KTrx */
