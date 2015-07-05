/*#
 ### Name: duXorNavigare
 ### Autor: Dusan Perisic
 ### Home: dusanperisic.com
 ###
 ### Napomena: 	
 ### ------------------------------------------------------------------
 ### Uputstvo:
 ### ------------------------------------------------------------------
#*/ 
var duXorSimpleSlider={
    slikaID1:'#slika-1',
    slikaID2:'#slika-2',
    slikaID3:'#slika-3',
    slikeClass:'.slike-duXorSimpleSlider',
    duXorSimpleSliderID:'#media',
    velikaSlikaID:'#shFoto',
    modalID:'#prikaziSliku',
    dugmeKontrol:'.duXorSimpleSlider-kontrola',
    dugmeModalSlide:'.modalSlide',
    brojFoto:0,
    foto:{},
    pozicija:0,
    podesavanja:function(foto){
        this.foto=foto;
        this.brojFoto=foto.length;
        $(duXorSimpleSlider.slikeClass).click(function(){duXorSimpleSlider.prikaziModal($(this).attr('src'))});
        $(this.dugmeKontrol).click(function(){duXorSimpleSlider.promjena($(this).data('strana'))});
        $(this.dugmeModalSlide).click(function(){duXorSimpleSlider.setModalImg($(this).data('strana'))});
        this.podesiFoto()
    },
    podesiFoto:function(){
        if(this.brojFoto==0) $(this.duXorSimpleSliderID).hide();
        else{
            $(this.slikaID1).attr('src','/'+this.foto[this.pozicija]);
            if(this.brojFoto>=1){
                $(this.slikaID2).attr('src','/'+this.foto[this.sledecaPozicija(1,'left')]);
                if(this.brojFoto>=2) {
                    $(this.slikaID3).attr('src','/'+this.foto[this.sledecaPozicija(2,'left')]);
                }
            }
        }
    },
    promjena:function(strana){
        this.pozicija=this.sledecaPozicija(1,strana);
        this.podesiFoto()
    },
    sledecaPozicija:function(koliko,strana){
        return strana=='right'?this.pozicija+koliko>=this.brojFoto?this.pozicija+koliko-this.brojFoto:this.pozicija+koliko:this.pozicija-koliko<0?this.brojFoto+this.pozicija-koliko:this.pozicija-koliko;
    },
    prikaziModal:function(foto){
        $(this.velikaSlikaID).attr('src',foto);
        $(this.modalID).modal('show')
    },
    setModalImg:function(strana){
        this.pozicija=this.sledecaPozicija(1,strana);
        $(this.velikaSlikaID).attr('src','/'+this.foto[this.pozicija]);
    }
};