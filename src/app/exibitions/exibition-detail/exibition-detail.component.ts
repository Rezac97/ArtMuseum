import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Artworks } from 'src/app/model/artworks.model';
import { Exibition } from 'src/app/model/exibition.model';
import { ExibitionService } from 'src/app/services/exibition.service';

@Component({
  selector: 'app-exibition-detail',
  templateUrl: './exibition-detail.component.html',
  styleUrls: ['./exibition-detail.component.css'],
})
export class ExibitionDetailComponent {
  exibitionId!: number;
  exibition: Exibition = new Exibition();
  artworks: Artworks[] = [];
  edit: boolean = false;
  authorControl: FormControl = new FormControl('');
  exibitionArtworks: Artworks[] = [];
  freeArtworks: Artworks[] = [];
  showEditButton: boolean = true;

  constructor(
    private service: ExibitionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // TODO: skontati sta radi ActivatedRoute, a sta QP?
    this.route.params.subscribe((params: Params) => {
      this.exibitionId = params['id'];
      this.getExibition();
      this.getArtworks();
      this.getAllArtworks();
    });
  }

  getExibition() {
    this.service.getOne(this.exibitionId).subscribe({
      next: (exibition: Exibition) => {
        console.log(exibition);
        this.exibition = exibition;
      },
      error: (response: any) => {
        console.log('error: ', response);
      },
    });
  }

  getArtworks() {
    this.service.getArtworks(this.exibitionId).subscribe({
      next: (artworks: Artworks[]) => {
        console.log(artworks);
        this.artworks = artworks;
        this.exibitionArtworks = artworks;
      },
      error: (response: any) => {
        console.log('error: ', response);
      },
    });
  }

  getAllArtworks() {
    this.service.getAllArtworks().subscribe({
      next: (artworks: Artworks[]) => {
        console.log(artworks);
        this.freeArtworks = artworks;
      },
      error: (response: any) => {
        console.log('error: ', response);
      },
    });
  }

  onEditClicked() {
    this.edit = true;
    this.showEditButton = false;
    this.freeArtworks = this.freeArtworks.filter(
      (freeArtworks: Artworks) =>
        !this.exibitionArtworks.some(
          (exibitionArtworks) => exibitionArtworks._id === freeArtworks._id
        )
    );
  }

  onSearchClick() {}

  onDoneClicked() {
    this.edit = false;
    this.showEditButton = true;
  }
  onAddClicked(art: Artworks) {}

  onRemoveClicked(artId: number) {}
}
