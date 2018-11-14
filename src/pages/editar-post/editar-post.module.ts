import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarPostPage } from './editar-post';

@NgModule({
  declarations: [
    EditarPostPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarPostPage),
  ],
})
export class EditarPostPageModule {}
