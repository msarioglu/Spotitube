import nl.han.dea.datasource.IPlaylistDAO;
import nl.han.dea.domain.Playlist;
import nl.han.dea.domain.Playlists;
import nl.han.dea.domain.User;
import nl.han.dea.services.IPlaylistService;
import nl.han.dea.services.PlaylistService;
import nl.han.dea.sessions.LoginSessions;
import org.junit.After;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.runners.MockitoJUnitRunner;

import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class PlaylistServiceTest {

    private Playlists playlists = new Playlists();

    @Mock
    private IPlaylistDAO playlistDAO;

    @InjectMocks
    private IPlaylistService playlistService = new PlaylistService();

    @After
    public void tearDown() throws Exception {
        LoginSessions.map.remove("test");
    }

    @Test
    public void getAllPlaylistsLoggedIn() throws Exception {
        LoginSessions.addSession("test", new User("test"));
        playlists.getPlaylists().add(new Playlist(1,"testPlaylist", true));
        playlists.setLength(0);
        when(playlistDAO.getAllPlaylists("test")).thenReturn(playlists);
        Assert.assertEquals(playlists, playlistService.getAllPlaylists("test").getEntity());
        Assert.assertEquals(200, playlistService.getAllPlaylists("test").getStatus());
    }

    @Test
    public void getAllPlaylistsNotLoggedIn() throws Exception {
        Assert.assertEquals(403, playlistService.getAllPlaylists("test").getStatus());
    }

    @Test
    public void getAllPlaylistsWitEmptyToken() throws Exception {
        Assert.assertEquals(400, playlistService.getAllPlaylists("").getStatus());
    }


}
