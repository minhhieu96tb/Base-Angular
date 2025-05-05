import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {

    @Input() src: string = '';
    @Input() showQuarity: boolean = false;
    @Input() listQuarity: any[] = [];

    @Output() changeQuaity = new EventEmitter<any>();

    @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement>;
    @ViewChild('videoFullscreend') videoFullscreend: ElementRef;

    isPlaying = false;
    volume: number = 1;
    currentVolume:number = 0;
    progress: number = 0;
    duration: number = 0;
    currentTime: number = 0;
    value: number = 0;
    isVolume: boolean = true;
    isDropdownOpen: boolean = false;
    quairtyVideo: any = {
      name: 'Mặc định'
    }

    ngOnInit(): void {

    }

    ngOnChanges(changes: SimpleChanges): void {
      if (changes['src'] && changes['src'].currentValue !== changes['src'].previousValue) {
        this.loadVideo();
      }
    }

    loadVideo(): void {
      const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
      video?.load();
      this.initializeVideo();
      if (this.isPlaying) {
        video?.play();
      }
    }

    togglePlay(): void {
      this.isPlaying = !this.isPlaying
      const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
      if (this.isPlaying) {
        video?.play();
      } else {
        video?.pause();
      }
    }

    setVolume(): void {
      const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
      video.volume = this.volume;
      this.currentVolume = this.volume;
    }

    fullScreen(): void {
      const video = this.videoFullscreend?.nativeElement;
      if (!document.fullscreenElement){
        if (video?.requestFullscreen) {
            video?.requestFullscreen();
          } else if (video?.mozRequestFullScreen) { /* Firefox */
            video?.mozRequestFullScreen();
          } else if (video?.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
            video?.webkitRequestFullscreen();
          } else if (video?.msRequestFullscreen) { /* IE/Edge */
            video?.msRequestFullscreen();
        }
      }else{
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
      }
    }

    updateProgress(): void {
      const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
      this.progress = video?.currentTime;
      this.currentTime = video?.currentTime;
    }

    initializeVideo(): void {
      const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
      this.duration = video?.duration;
      this.progress = 0;
      this.currentTime = 0;
      if(video){
        video.volume = this.volume;
      }
    }

    seek(): void {
      const video: HTMLVideoElement = this.videoPlayer?.nativeElement;
      video.currentTime = this.progress;
    }

    formatTime(time: number): string {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    toggleVolum(): void{
        this.isVolume = !this.isVolume;
        if(!this.isVolume){
            this.volume = 0;
        }else{
          if(this.currentVolume == 0){
            this.volume = 1
          }
          else {
            this.volume = this.currentVolume;
          }
        }
        this.setVolume();
    }

  onChangeQuairty(event: Event, option){
    event.stopPropagation();
    event.preventDefault();
    this.quairtyVideo = option;
    this.isDropdownOpen = false;
    this.changeQuaity.emit(option);
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

}
