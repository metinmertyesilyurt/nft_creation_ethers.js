# NFT Smart Contract Deployment

Bu proje, Ethereum testnet ağında NFT (Non-Fungible Token) oluşturmayı göstermektedir. Deploy işlemi, ethers.js kütüphanesi kullanılarak otomatikleştirilir.

## Nasıl Çalışır?

1. Gerekli paketleri yükleyin: ethers, dotenv ve fs.

2. `.env` dosyası oluşturun ve aşağıdaki ortam değişkenlerini ekleyin:
   ```
   ETHERSCAN_API=<etherscan-api-key>
   PRIVATE_KEY=<private-key>
   ```

3. `abi` ve `bytecode` değişkenlerini uygun şekilde ayarlayın. Bu değişkenler, akıllı sözleşme ABI'sini ve bytecode'unu içeren JSON dosyalarını okur.

4. `provider` ve `signer` değişkenlerini ayarlayın. `provider`, Ethereum ağına bağlanmayı sağlar ve `signer` adresi ve private key kullanılarak işlemleri imzalar.

5. `main` fonksiyonunda aşağıdaki adımları gerçekleştirin:
   - Gaz fiyatını almak için `provider.getFeeData()` fonksiyonunu kullanın.
   - `options` nesnesini oluşturun ve gaz fiyatını ayarlayın.
   - `factory` nesnesini oluşturun ve akıllı sözleşme fabrikasını oluşturmak için `ContractFactory.deploy()` fonksiyonunu kullanın.
   - Dağıtımı gerçekleştirin ve sonucu bekleyin.

6. Dağıtım işlemi başarılı bir şekilde tamamlandığında, akıllı sözleşme adresi ile birlikte bir bildirim görüntüleyin. Aksi takdirde, hata mesajını görüntüleyin.

## Kurulum

1. Projeyi kopyalayın: `git clone`
2. Proje dizinine gidin: `cd project-directory`
3. Bağımlılıkları yükleyin: `npm install`
4. `.env` dosyasını oluşturun ve gerekli ortam değişkenlerini ekleyin:

```
ETHERSCAN_API=<etherscan-api-key>
PRIVATE_KEY=<private-key>
```

5. `main` fonksiyonunu çalıştırın: `node create-nft`
