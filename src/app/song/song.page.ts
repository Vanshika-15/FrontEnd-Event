import { Component, OnInit } from '@angular/core';
import { HomeserviceService } from '../service/homeservice.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-song',
  templateUrl: './song.page.html',
  styleUrls: ['./song.page.scss'],
})
export class SongPage implements OnInit {

  constructor(public data:HomeserviceService,
    private storage: Storage) { }

  async ngOnInit() {
    // const storage =await this.storage.create
    await this.storage.set('name', 'Mr. Ionitron');
    const name = await this.storage.get('name');
    console.log(name);
    console.log(await this.storage.length());
    console.log(await this.storage.keys());

    // await this.storage.remove('name');
    
  }

}
