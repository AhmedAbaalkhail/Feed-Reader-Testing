
$(function() {
    
//=====================================Starting of new suite======================================
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        //This part to test that all feeds have URLs
        it("All feeds have not empty URL", () => {
        allFeeds.forEach(feed => {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        });
      });

        //This part to test that all feeds have Names
        it("All feeds have not empty Name", () => {
        allFeeds.forEach(feed => {
          expect(feed.name).toBeDefined();
          expect(feed.name.length).not.toBe(0);
        });
      });
    });

//=====================================Starting of new suite======================================
    
    describe('The menu', function() {
        
        const body = document.body;
        const hamburgerIcon = document.querySelector(".menu-icon-link");
        
        //This part to test menu element hidden by default
        it("menu is hidden", () => {
            expect(body.className).toContain("menu-hidden");
        });
        
        //This part to test hamburgerIcon when clicked
        it('Show and hide the menu when clicked', () => {
            hamburgerIcon.click();
            expect(body.className).not.toContain('menu-hidden');
            hamburgerIcon.click();
            expect(body.className).toContain('menu-hidden');
          });
    });

//=====================================Starting of new suite======================================
    
    describe('Initial Entries', function() {
        
        beforeEach(function (done) {
            loadFeed(0, function (){
                done();
            });
        });
        
        //This part to check that at least a single .entry element within the .feed container
        it('define initial entries', function (){
            expect($('.entry .feed')).toBeDefined();
        });
    });

//=====================================Starting of new suite======================================

    describe('New Feed Selection', function(){
        
        let firstFeed, secondFeed;
        
        //This solution from Ryan Waite https://www.youtube.com/watch?v=eUdkhVkpCf8
        beforeEach(function(done){
            loadFeed(3, function() {
                firstFeed = document.querySelector('div.feed').innerHTML;
                loadFeed(2, function() {
                    secondFeed = document.querySelector('div.feed').innerHTML;
                    done();
            });
        });
    });
        
        it('loads new feeds', function(){
            expect(firstFeed).not.toBe(secondFeed);
        });
    });
}());
