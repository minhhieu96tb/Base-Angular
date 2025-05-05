import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncateListPipe } from './truncate-list.pipe';
import { ConvertTimePipe } from './convert-time.pipe';
import { NewlineToBrPipe } from './newline-to-br.pipe';
import { JoinNamesPipe } from './join-name.pipe';
import { CapacityPipe } from './capacity.pipe';
import { FilterCountPipe } from './filterCount.pipe';
import { TimezonePipe } from './tim-zone.pipe';
import { DirectionsPathPipe } from './directions.pipe';
import { VideoQualityPipe } from './video-quality.pipe';
import { ConvertUpscaleQualityPipe } from './convertQuality.pipe';
import { ConvertTimeConfigPipe } from './converTime.pipe';
import { NumberSeparatorPipe } from './exampleNumber.pipe';
import { ReplaceTextPipe } from './removeText.pipe';
import { NotificationTypePipe } from './checkNotificationType.pipe';
import { TypeCheckList } from './checkTypeList.pipe';
import { CropImagePipe } from './renderCropImage.pipe';
import { FormatFilePathPipe } from './formatFilePath.pipe';

@NgModule({
  declarations: [
    TruncateListPipe,
    ConvertTimePipe,
    NewlineToBrPipe,
    JoinNamesPipe,
    CapacityPipe,
    FilterCountPipe,
    TimezonePipe,
    DirectionsPathPipe,
    VideoQualityPipe,
    ConvertUpscaleQualityPipe,
    ConvertTimeConfigPipe,
    NumberSeparatorPipe,
    ReplaceTextPipe,
    NotificationTypePipe,
    TypeCheckList,
    CropImagePipe,
    FormatFilePathPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncateListPipe,
    ConvertTimePipe,
    NewlineToBrPipe,
    JoinNamesPipe,
    CapacityPipe,
    FilterCountPipe,
    TimezonePipe,
    DirectionsPathPipe,
    VideoQualityPipe,
    ConvertUpscaleQualityPipe,
    ConvertTimeConfigPipe,
    NumberSeparatorPipe,
    ReplaceTextPipe,
    NotificationTypePipe,
    TypeCheckList,
    CropImagePipe,
    FormatFilePathPipe
  ]
})
export class PipeModule { }