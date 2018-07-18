class ImageListProxy extends puremvc.Proxy{
    static NAME:string = 'imagelistproxy';
    
    loadList():void{
        var data = [];
        data.push(new ImageVO('https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/p320x320/20374581_100571347305560_7317076708078728904_n.jpg?_nc_cat=0&oh=5ff86718c1965bee96768850afaffe89&oe=5BA91BA6','QRJ'));
        data.push(new ImageVO('https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/p320x320/29133953_101404150701210_3519396494123728896_n.jpg?_nc_cat=0&oh=169f34cdea6c9c9432acf42c78533cf4&oe=5BD16194','LJZ'));
        data.push(new ImageVO('https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/p320x320/22489781_118927548866382_9206156467210624388_n.jpg?_nc_cat=0&oh=2e35b48bbca5a5d16c4a55eba115b468&oe=5BE2385A','HZH'));
        data.push(new ImageVO('https://platform-lookaside.fbsbx.com/platform/instantgames/profile_pic.jpg?igpid=2159084647442468&height=256&width=256&ext=1532093485&hash=AeTDrIMow-lbTVT3','CYJ'));
        data.push(new ImageVO('https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/p320x320/22405470_148398849232076_5402598852506154971_n.jpg?_nc_cat=0&oh=648b2bbf15c8137c2e1ca61cdab5d221&oe=5BE695C0','NCH'));
        data.push(new ImageVO('https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/32695463_206442116819627_3658936919259086848_n.jpg?_nc_cat=0&_nc_eui2=AeEH_Ko1etpDOBgyCN6VDKIxxhCFNO8PExrTkEYyeUhorapl3vwzkgF4zA2IxOatfU4EaIKoQOfkwBLme1PJgHNbJksIhGwoTqbNysFYaz5ghQ&oh=47e3b3208ca78047ec3af2da4ff3e4d9&oe=5BD5D87F','WXB'));
        data.push(new ImageVO('https://scontent-hkg3-2.xx.fbcdn.net/v/t1.0-1/p320x320/22528082_134258247325696_7316642491119818851_n.jpg?_nc_cat=0&oh=eb60ceb2a0bf8b7c6e1c9bd08164566b&oe=5B9FE387','WYJ'));
        
        //加载成功后发出完成通知
        this.sendNotification(NotificationNames.LOAD_COMPLETE, data);
    }
}